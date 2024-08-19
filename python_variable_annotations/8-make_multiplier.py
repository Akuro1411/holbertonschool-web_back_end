#!/usr/bin/env python3
"""
Typing module is imported
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """
    The function returns callable value
    """
    def call(new_multiplier: float) -> float:
        return new_multiplier * multiplier
    return call
