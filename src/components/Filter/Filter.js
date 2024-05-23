import React from 'react';

const Filter = ({ categories, setFilter }) => {
    return (
        <div className="filterContainer">
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                {categories.map(category => (
                    <option key={category.id} value={category.title}>
                        {category.title}
                    </option>
                ))}
            </select>
        </div>
    );
};


export default Filter;
