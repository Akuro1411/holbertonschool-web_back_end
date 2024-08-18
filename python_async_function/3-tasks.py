#!/usr/bin/env python3
"""
Random and asyncio modules are imported
"""
import asyncio
import random


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    :param max_delay:
    :return: The return type with asyncio.Task
    """
    a = asyncio.ensure_future(wait_random(max_delay))
    return a
