# from pydantic import BaseModel, Schema, BaseConfig
# from datetime import datetime, timezone
# from typing import Optional, List

# class DateTimeModelMixin(BaseModel):
#   created_at: Optional[datetime] = Schema(..., alias="createdAt")
#   updated_at: Optional[datetime] = Schema(..., alias="updatedAt")


# class DBModelMixin(DateTimeModelMixin):
#   id: Optional[int] = None


# class RWModel(BaseModel):
#   class Config(BaseConfig):
#     allow_population_by_alias = True
#     json_encoders = {
#       datetime: lambda dt: dt.replace(tzinfo=timezone.utc)
#       .isoformat()
#       .replace("+00:00", "Z")
#     }

# # =============

# class Classification(RWModel):
#   country: str = ""
#   value: str = ""


# class Movie(RWModel):
#   name: str = ""
#   casts: List[str] = []
#   geners: List[str] = []
#   year: int = 0