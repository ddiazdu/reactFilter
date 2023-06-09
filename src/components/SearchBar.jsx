
import { useState } from 'react';
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({ placeholder, data }) => {

    const [filterData, setFilterData] = useState([])
    const [actualWord, setActualWord] = useState("")

    const handleFilter = (e) => {

        setActualWord(e.target.value)
        const filter = data.filter((value) => {
            return value.title.toLowerCase().includes(actualWord.toLowerCase())
        })
        if (actualWord === "") {
            setFilterData([])
        } else {
            setFilterData(filter)
        }
    }

    const clearData = () => {
        setFilterData([])
        setActualWord("")
    }


    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={placeholder} value={actualWord} onChange={handleFilter} />
                <div className="searchIcon">
                    {
                        filterData.length === 0 ? (
                            <SearchIcon
                                sx={{ color: 'black' }}
                                fontSize='large'
                            />
                        ) : (
                            <CloseIcon
                                className='cursor'
                                sx={{ color: 'black' }}
                                fontSize='large'
                                onClick={clearData}

                            />
                        )
                    }

                </div>
            </div>

            {
                filterData.length !== 0 && (

                    <div className="dataResults">
                        {
                            filterData.map((item, key) => {
                                return (
                                    <a className='dataItem' href={item.link} target="_blank" key={key}>
                                        <p>{item.title}</p>
                                    </a>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SearchBar