#!/usr/bin/env python3
"""
Typing module is imported
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """
    The function returns callable value
    """
    def call(new_multipler: float) -> float:
        return new_multiplier * new_multiplier
    return call
