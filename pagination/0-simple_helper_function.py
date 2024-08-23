#!/usr/bin/env python3
"""
No module is imported
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    :param page:
    :param page_size:
    :return: The tuple of start_index and end_index
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index
