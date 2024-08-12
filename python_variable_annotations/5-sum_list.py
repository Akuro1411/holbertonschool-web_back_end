#!/usr/bin/env python3
"""
Typing module is imported
"""
import typing


def sum_list(input_list: typing.List[float]) -> float:
    """
    Function returns sum of float list
    """
    new_sum = sum(input_list)
    return new_sum
