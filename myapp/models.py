from django.db import models

class uploads(models.Model):
    userid=models.IntegerField(default=0)
    ide=models.IntegerField(default=0)
    title=models.CharField(max_length=100)
    body=models.CharField(max_length=5000)
    usernme1=models.CharField(max_length=100,default=None,null=True)

# Create your models here.
