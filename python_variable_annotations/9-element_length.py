#!/usr/bin/env python3
"""
Typing module is imported
"""
import typing


def element_length(lst: typing.Iterable[typing.Sequence]) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """
    Function is annotated for given types
    """
    return [(i, len(i)) for i in lst]
