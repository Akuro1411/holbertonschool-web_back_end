#!/usr/bin/env python3
"""
The modules imported for async comprehension
"""
import asyncio
import random
import typing


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """
    Funtcion returns the list of floar number which
    numbers are yielded by prev functoin
    """
    arr = []
    async for i in async_generator():
        arr.append(i)
    return arr
