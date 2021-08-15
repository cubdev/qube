
from pydantic import BaseModel, Field
from bson import ObjectId
from typing import List, Optional
from app.models.pyobject import PyObjectId

class Question(BaseModel):
    """Model class for Question object

    Args:
        BaseModel : Using pydantic's Basemodel class for validation
    """
    description: str
    options: str
    answer: Optional[str] = None
    topics: str
    subjects: str
    groups: str
    courses: str

class QuestionInDB(Question):
    """Database model class for Question object

    Args:
        Question (Question): Inheriting Question Base Model class
    """
    id: Optional[PyObjectId] = None

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {PyObjectId: str}






