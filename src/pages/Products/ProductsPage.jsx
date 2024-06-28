import React, { useState } from 'react'
import classes from './ProductsPage.module.css'
import { getCurrentDateFormatted } from '../../utils/currentDate'
import SearchBar from '../../components/UI/searchBar/SearchBar'
import SortOptionButton from '../../components/UI/buttons/SortButton/SortOptionButton'
import ShopProducts from '../../components/UI/products/ShopProduct/ShopProducts'
import Pagination from '../../components/UI/pagination/Pagination'

const ProductsPage = () => {
  const sortProps = ["Default", "A-Z", "Price"];
  const currentDate = getCurrentDateFormatted();
  const [sortOption, setSortOption] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("")
  const itemCount = 50;
  const itemsPerPage = 15;

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.pageHeadingWrapper}>
        <div className={classes.pageHeadingTitle}>
          <span className={classes.produceTitle}>Produce</span>
          <span><b>Fresh</b> — {currentDate}</span>
        </div>
        <SearchBar onSearch={handleSearch}/>
        <div className={classes.productSortWrapper}>
          <ul>
            {sortProps.map((sort) => (
              <SortOptionButton 
                children={sort}
                sortOption={sortOption}
                setSortOption={setSortOption}
                key={crypto.randomUUID()}
              />
            ))}
          </ul>
        </div>
      </div>
      <hr/>
      <div className={classes.productsWrapper}>
        <ShopProducts
          itemCount={itemCount}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          sortOption={sortOption}
          searchQuery={searchQuery}
        />
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalCount={itemCount}
        currentPage={currentPage}
        siblingCount={1}
        pageSize={itemsPerPage}
      />
    </div>
  )
}

export default (ProductsPage)