from apscheduler.schedulers.blocking import BlockingScheduler
from datetime import datetime, timedelta
from ..apis.doordash_client import DoorDashClient
from ..processing.data_processor import DataProcessor
from ..storage.opensearch_connector import OpenSearchClient

def daily_pipeline():
    # 1. Get yesterday's date (US timezone)
    target_date = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")
    
    # 2. Fetch data
    dd_client = DoorDashClient()
    dd_client.authenticate()
    orders = dd_client.get_daily_orders(target_date)
    
    # 3. Process data
    processor = DataProcessor()
    processed = [processor.process_order(o) for o in orders]
    
    # 4. Store in OpenSearch
    opensearch = OpenSearchClient()
    index_name = f"orders-{target_date}"
    opensearch.create_index(index_name)
    opensearch.bulk_insert(index_name, processed)

if __name__ == "__main__":
    scheduler = BlockingScheduler(timezone="America/New_York")
    scheduler.add_job(daily_pipeline, 'cron', hour=0, minute=5)  # 12:05 AM ET
    scheduler.start()