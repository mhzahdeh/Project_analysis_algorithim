from fastapi import APIRouter
from opensearchpy import OpenSearch
import os

router = APIRouter()

opensearch = OpenSearch(
    hosts=[os.getenv("OPENSEARCH_HOST")],
    http_auth=(os.getenv("OPENSEARCH_USER"), os.getenv("OPENSEARCH_PASSWORD"))
)

@router.get("/analytics/daily-orders")
async def get_daily_orders(date: str):
    query = {
        "size": 0,
        "aggs": {
            "total_orders": {"value_count": {"field": "order_id"}},
            "avg_delivery_time": {"avg": {"field": "delivery_time"}}
        }
    }
    result = opensearch.search(index=f"orders-{date}", body=query)
    return {
        "total_orders": result["aggregations"]["total_orders"]["value"],
        "avg_delivery": result["aggregations"]["avg_delivery_time"]["value"]
    }