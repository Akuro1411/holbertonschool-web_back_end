#!/usr/bin/env python3
"""
Typing module is imported
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    return multiplier * multiplier
