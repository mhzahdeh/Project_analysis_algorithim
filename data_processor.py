from datetime import datetime

class DataProcessor:
    def process_order(self, raw_order):
        return {
            "order_id": raw_order["id"],
            "timestamp": datetime.fromisoformat(raw_order["created_at"]),
            "items": [item["name"] for item in raw_order["items"]],
            "total": float(raw_order["total"]),
            "delivery_time": self._calculate_delivery_time(
                raw_order["pickup_time"],
                raw_order["dropoff_time"]
            ),
            "customer": {
                "id": raw_order["customer"]["id"],
                "loyalty_tier": self._determine_loyalty(
                    raw_order["customer"]["order_count"]
                )
            }
        }

    def _calculate_delivery_time(self, pickup, dropoff):
        return (
            datetime.fromisoformat(dropoff) - 
            datetime.fromisoformat(pickup)
        ).seconds // 60

    def _determine_loyalty(self, order_count):
        return "Platinum" if order_count > 15 else "Gold" if order_count > 5 else "Regular"