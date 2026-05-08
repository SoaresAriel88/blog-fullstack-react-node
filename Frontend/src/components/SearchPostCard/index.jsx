import './styles.css';
export const SearchPostCard = ({ handleSearch, searchValue }) => {

    return(
        
        <input type="search" 
            className="search-posts"
            onChange={handleSearch}
            value={searchValue}
            placeholder='Type your search'
        />

    

    

)
}