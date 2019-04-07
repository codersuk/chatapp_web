# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Group(models.Model):
    Name = models.CharField(max_length=128)
    Description = models.CharField(max_length=200, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Create your models here.
