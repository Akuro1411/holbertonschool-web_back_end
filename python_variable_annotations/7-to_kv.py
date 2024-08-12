#!/usr/bin/env python3
"""
Typing module is imported
"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """
    :param k: annotated as str
    :param v: annotated as int and float
    :return: annotated as tuple of str and float
    """
    return k, v*v
