#!/usr/bin/env python3
"""
Time and asyncio modules are imported
"""
import time
import asyncio


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Calculates the time of total execution
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    last_time = time.time()
    total_time = last_time - start_time
    return total_time / n
