#!/usr/bin/env python3
"""
Typing module is imported
"""
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """
    Function returns sum of floats and integers list
    """
    new_sum = sum(mxd_lst)
    return new_sum
