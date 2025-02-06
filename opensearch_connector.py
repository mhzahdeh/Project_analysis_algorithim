from opensearchpy import OpenSearch, helpers
import os

class OpenSearchClient:
    def __init__(self):
        self.client = OpenSearch(
            hosts=[os.getenv("OPENSEARCH_HOST")],
            http_auth=(
                os.getenv("OPENSEARCH_USER"), 
                os.getenv("OPENSEARCH_PASSWORD")
            )
        )
    
    def bulk_insert(self, index_name, documents):
        actions = [
            {
                "_index": index_name,
                "_source": doc
            }
            for doc in documents
        ]
        helpers.bulk(self.client, actions)
    
    def create_index(self, index_name):
        if not self.client.indices.exists(index=index_name):
            self.client.indices.create(
                index=index_name,
                body={
                    "settings": {
                        "index": {
                            "number_of_shards": 1,
                            "number_of_replicas": 0
                        }
                    },
                    "mappings": {
                        "properties": {
                            "timestamp": {"type": "date"},
                            "total": {"type": "float"},
                            "delivery_time": {"type": "integer"}
                        }
                    }
                }
            )