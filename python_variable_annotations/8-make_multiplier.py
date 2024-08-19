#!/usr/bin/env python3
"""
Typing module is imported
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """
    The function returns callable value
    """
    def __call__():
        return (multiplier * multiplier)
    return call()
