import React, { useState } from "react";
import { TouchableWithoutFeedback, Text, View, Modal } from "react-native";
import Button from "../Button/Button";
import styles from './FilterBox.styles';
import categoriesData from '../../datas/categories.json';
import industriesData from '../../datas/industries.json';
import SearchItem from "../SearchItem";

const FilterBox = ({ modalVisible, close, filtering, filterOptions, filterType }) => {
    const [filters, setFilters] = useState(filterOptions);
    const [searchCategories, setSearchCategories] = useState([]);
    const [categories, setCategories] = useState(filterOptions.categories);
    const [searchIndustries, setSearchIndustries] = useState([]);
    const [industries, setIndustries] = useState(filterOptions.industries);
    const [results, setResults] = useState(true);

    const LevelData = [
        { "id": 0, "name": "Entry Level" },
        { "id": 1, "name": "Mid Level" },
        { "id": 2, "name": "Senior Level" },
        { "id": 3, "name": "Management" },
        { "id": 4, "name": "Internship" },
    ]

    const SizeData = [
        { "id": 0, "name": "Small Size" },
        { "id": 1, "name": "Medium Size" },
        { "id": 2, "name": "Large Size" },
    ]

    const handleCategory = text => {
        if (text.trim().length > 0) {
            const filteredList = categoriesData.filter(category => {
                const searcedText = text.toLowerCase();
                const currentTitle = category.name.toLowerCase();
          
                return currentTitle.indexOf(searcedText) >= 0;
              });
            setSearchCategories(filteredList);

            if(filteredList.length == 0) {
                setResults(false);
            }
            else{
                setResults(true);
            }
        }
        else {
            setSearchCategories([]);
            setResults(true);
        }
    }

    const handleIndustries = text => {
        if (text.trim().length > 0) {
            const filteredList = industriesData.filter(industry => {
                const searcedText = text.toLowerCase();
                const currentTitle = industry.name.toLowerCase();
          
                return currentTitle.indexOf(searcedText) >= 0;
              });
            setSearchIndustries(filteredList);

            if(filteredList.length == 0) {
                setResults(false);
            }
            else{
                setResults(true);
            }
        }
        else {
            setSearchIndustries([]);
            setResults(true);
        }
    }

    const renderFilter = ({ data, filter, isSelected }) => (
        <View style={styles.body_container}>
            {data.map(item => (
                <TouchableWithoutFeedback key={item.id} onPress={() => filter(item)}>
                    <View style={styles.filter}>
                        <View style={[styles.checkbox, isSelected(item) && styles.checkbox_selected]} />
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </View>
    );

    const noResults = () => (
        <View style={styles.search_filter_noresults}>                        
            <Text style={styles.search_text}>There were no results</Text>
        </View>
    );

    const renderSearch = ({ data, filter }) => (
        <View style={styles.search_container}>
            {data.map(item => (
                <TouchableWithoutFeedback key={item.id} onPress={() => filter(item)}>
                    <View style={styles.search_filter}>                        
                        <Text style={styles.search_text}>{item.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </View>
    );

    const descendingSelect = () => {
        setFilters({ ...filters, descending: !filters.descending });
    };

    const isLevelSelected = (level) => filters.levels.some(l => l.id === level.id);

    const LevelSelect = (level) => {
        const updatedLevels = filters.levels.some(l => l.id === level.id)
            ? filters.levels.filter(l => l.id !== level.id)
            : [...filters.levels, level];
        setFilters({ ...filters, levels: updatedLevels });
    };

    const isSizeSelected = (size) => filters.sizes.some(s => s.id === size.id);

    const SizeSelect = (size) => {
        const updatedSizes = filters.sizes.some(s => s.id === size.id)
            ? filters.sizes.filter(s => s.id !== size.id)
            : [...filters.sizes, size];
        setFilters({ ...filters, sizes: updatedSizes });
    };

    const isCategorySelected = (category) => filters.categories.some(c => c.id === category.id);

    const CategorySelect = (category) => {
        const updatedCategories = filters.categories.some(c => c.id === category.id)
            ? filters.categories.filter(c => c.id !== category.id)
            : [...filters.categories, category];
        setFilters({ ...filters, categories: updatedCategories });        
    };

    const CategorySelectSearch = (category) => {
        if (isCategorySelected) {
            setCategories(prevCategories => {
                const isCategoryInCategories = prevCategories.some(c => c.id === category.id);
                return isCategoryInCategories ? prevCategories : [...prevCategories, category];
            });
            const updatedCategories = [...filters.categories, category];
            setFilters({ ...filters, categories: updatedCategories });
        }
    };

    const isIndustriesSelected = (industry) => filters.industries.some(i => i.id === industry.id);

    const IndustriesSelect = (industry) => {
        const updatedIndustries = filters.industries.some(i => i.id === industry.id)
            ? filters.industries.filter(i => i.id !== industry.id)
            : [...filters.industries, industry];
        setFilters({ ...filters, industries: updatedIndustries });        
    };

    const IndustriesSelectSearch = (industry) => {
        if (isCategorySelected) {
            setIndustries(prevIndustries => {
                const isIndustryInIndustries = prevIndustries.some(c => c.id === industry.id);
                return isIndustryInIndustries ? prevIndustries : [...prevIndustries, industry];
            });
            const updatedIndustries = [...filters.industries, industry];
            setFilters({ ...filters, industries: updatedIndustries });
        }
    };

    const handleFilterPress = () => {
        filterType == 'job'
        ? setSearchCategories([])
        : setSearchIndustries([]);
        filtering(filters);
        close();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centered_view}>
                <View style = { styles.header_container }>
                    <Text style = { styles.header_text }>Filter</Text>
                    <Button iconL="close" colorContainer="#F578AE" onPress={close} />
                </View>
                
                <View style={styles.container}>
                    <View style={styles.inner_container}>
                        <View style={styles.body_container}>
                            <TouchableWithoutFeedback onPress={descendingSelect}>
                                <View style={styles.filter}>
                                    <View style={[styles.checkbox, filters.descending && styles.checkbox_selected]} />
                                    <Text style={styles.text}>Most Trending</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>

                {
                    filterType == 'job'
                    ?   <View style={styles.container}>
                        <Text style = { styles.header_filter }>Levels</Text>
                        <View style={styles.inner_container}>
                            {renderFilter({
                                data: LevelData,
                                filter: LevelSelect,
                                isSelected: isLevelSelected,
                            })}
                        </View>
                    </View>
                    :   <View style={styles.container}>
                        <Text style = { styles.header_filter }>Size</Text>
                        <View style={styles.inner_container}>
                            {renderFilter({
                                data: SizeData,
                                filter: SizeSelect,
                                isSelected: isSizeSelected,
                            })}
                        </View>
                    </View>
                }

                {
                    filterType == 'job'
                    ?   <View style={styles.container}>
                        <Text style = { styles.header_filter }>Categories</Text>
                        <SearchItem onSearch={handleCategory}/>
                        <View style={styles.inner_container}>
                            {renderSearch({
                                data: searchCategories,
                                filter: CategorySelectSearch,
                            })}
                            {!results && noResults()}
                        </View>
                        <View style={styles.inner_container}>
                            {renderFilter({
                                data: categories,
                                filter: CategorySelect,
                                isSelected: isCategorySelected,
                            })}
                        </View>                    
                    </View>
                    :   <View style={styles.container}>
                        <Text style = { styles.header_filter }>Industries</Text>
                        <SearchItem onSearch={handleIndustries}/>
                        <View style={styles.inner_container}>
                            {renderSearch({
                                data: searchIndustries,
                                filter: IndustriesSelectSearch,
                            })}
                            {!results && noResults()}
                        </View>
                        <View style={styles.inner_container}>
                            {renderFilter({
                                data: industries,
                                filter: IndustriesSelect,
                                isSelected: isIndustriesSelected,
                            })}
                        </View>                    
                    </View>
                }
                
                

                

                


                <Button text='Filter' onPress={handleFilterPress} />
            </View>
        </Modal>
    )
}
export default FilterBox;
