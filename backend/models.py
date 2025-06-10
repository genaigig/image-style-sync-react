from pydantic import BaseModel
from typing import List

class RequestType(BaseModel):
    id: int
    name: str

class OEM(BaseModel):
    id: int
    name: str

class Plant(BaseModel):
    id: int
    name: str

class DataResponse(BaseModel):
    request_types: List[RequestType]
    oems: List[OEM]
    plants: List[Plant]
