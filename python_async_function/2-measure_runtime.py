#!/usr/bin/env python3
"""
Time and asyncio modules are imported
"""
import time
import asyncio


wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """
    Calculates the time of total execution
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    last_time = time.time() - start_time
    return last_time / n
