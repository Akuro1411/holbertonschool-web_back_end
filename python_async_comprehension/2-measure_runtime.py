#!/usr/bin/env python3
"""
All the needed modules are imported
"""
import asyncio
import random
import typing
from typing import Union
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Calculates the execution time of function and returns it
    """
    start_time = time.time()
    await asyncio.gather(*(async_comprehension() for i in range(4)))
    execution_time = time.time() - start_time
    return execution_time
