#!/usr/bin/env python3
"""
All the modules are imported
"""
import csv
import math
from typing import List, Dict, Any


def index_range(page: int, page_size: int) -> tuple:
    """
    :param page:
    :param page_size:
    :return: The tuple of start_index and end_index
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Returns the data for range
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        pagination_range = index_range(page, page_size)
        data = self.dataset()
        if pagination_range[0] > len(data):
            return []
        return data[pagination_range[0]:pagination_range[1]]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        :param page:
        :param page_size:
        :return: The function returns the dictionary of data
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        data = self.get_page(page, page_size)
        full_data = self.dataset()
        start_index, last_index = index_range(page, page_size)
        total_pages = math.ceil(len(full_data) / page_size)
        new_dict = {}
        new_dict["page_size"] = 0
        new_dict["page"] = page
        new_dict["data"] = data
        new_dict["next_page"] = None
        new_dict["prev_page"] = None
        new_dict["total_pages"] = total_pages
        if page != 1:
            new_dict["prev_page"] = page - 1
        if start_index < len(full_data):
            new_dict["next_page"] = page + 1
            new_dict["page_size"] = page_size
        return new_dict

