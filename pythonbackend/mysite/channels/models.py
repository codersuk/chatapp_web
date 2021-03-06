# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Channels(models.Model):
    name = models.CharField(max_length = 128)
    description = models.CharField(max_length = 256, default=None)
    groupid = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
