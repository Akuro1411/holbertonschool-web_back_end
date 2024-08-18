#!/usr/bin/env python3
"""
Random and asyncio modules are imported
"""
import asyncio
import random


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    :param n: 
    :param max_delay: 
    :return: Returns the list of delay time with asceding order 
    """
    new_list = []
    for i in range(n):
        a = await wait_random(max_delay)
        new_list.append(a)
    for i in range(len(new_list)):
        for j in range(len(new_list) - 1 - i):
            if new_list[j] > new_list[j + 1]:
                t = new_list[j]
                new_list[j] = new_list[j + 1]
                new_list[j + 1] = t
    return new_list
