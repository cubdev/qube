"""
Primary Database Module for the application
"""
 
from typing import List, Optional
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.models.questions import Question, QuestionInDB
import json

MONGODB_URL = "db"
MIN_CONNECTIONS = 1
MAX_CONNECTIONS = 5


class Database:
    """Singleton Database Class
    """
    def __init__(self) -> None:
        self.connection: AsyncIOMotorClient = None
        self.database: AsyncIOMotorDatabase = None

    async def init_dbi(self) -> None:
        self.connection = AsyncIOMotorClient(MONGODB_URL, maxPoolsize=MAX_CONNECTIONS,
            minPoolSize=MIN_CONNECTIONS)
        self.database = self.connection.qube

    async def insert(self, record, collection: str):
        """Insert single record object in the collection

        Args:
            record : Generic object to e inserted
            collection (str): Name of the collection

        Returns:
            record: Return input record for confirming successful insertion.
        """
        db_record = await self.database[collection].insert_one(record.dict(exclude={'id'})) 
        return record

    async def bulk_insert(self, records, collection: str):
        return await self.database[collection].insert_many(records)

    async def get_by_value(self, collection: str, key: str, value):
        """Method to get records from a collection based on key and value

        Args:
            collection (str): Name of the collection
            key (str): Key to searched
            value (generic): Value of the key
        """

        query = {key: value}
        db_records = self.database[collection].find(query)
        output_records = []
        async for record in db_records:
            output_records.append(QuestionInDB(**record, id=record["_id"]))
        return output_records


    async def get_all(self, collection):
        """Method to get all records from the collection

        Args:
            collection (str): Name of the collection
        Returns:
            List of all objects in the collection
        """
        db_records = self.database[collection].find()
        output_records = []
        async for record in db_records:
            output_records.append(QuestionInDB(**record, id=record["_id"]))
        return output_records
        
    async def close_dbi(self) -> None:
        self.connection.close()

db = Database()