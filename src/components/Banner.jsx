import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import propertySearchData, { budgetRanges } from "../data/propertySearchData";

const Banner = () => {
    const [word, setWord] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("all");

    const find = useMemo(() => {
        const normalizedWord = word.trim().toLowerCase();

        return propertySearchData.filter((item) => {
            const matchesWord = normalizedWord.length === 0
                ? true
                : item.name.toLowerCase().includes(normalizedWord);

            const selectedBudgetOption = budgetRanges.find((range) => range.value === selectedBudget);
            const matchesBudget = !selectedBudgetOption || selectedBudgetOption.max === null
                ? true
                : item.price >= selectedBudgetOption.min && item.price <= selectedBudgetOption.max;

            return matchesWord && matchesBudget;
        });
    }, [word, selectedBudget]);

    const hasNoResults = find.length === 0 && (word.trim().length > 0 || selectedBudget !== "all");

    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(/img/banner.jpg)` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title"><strong> BULLZY REALITY</strong> </h2>
                                <p> CONFIDENCE IN EVERY SQUARE FOOT</p>
                                <div className="search-area">
                                    <input
                                        value={word}
                                        onChange={(e) => setWord(e.target.value)}
                                        type="text"
                                        className="inp-search"
                                        placeholder="Search"
                                    />
                                    <button className="btn-search m-2">Search All</button>
                                </div>
                                <div className="budget-filter-area">
                                    <select
                                        className="budget-select"
                                        value={selectedBudget}
                                        onChange={(e) => setSelectedBudget(e.target.value)}
                                        aria-label="Filter by budget"
                                    >
                                        {budgetRanges.map((range) => (
                                            <option key={range.value} value={range.value}>
                                                {range.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {(word.trim().length > 0 || selectedBudget !== "all") && (
                                    <div className="find-search">
                                        {hasNoResults && <div>Not Found</div>}
                                        {!hasNoResults && find.map((item) => (
                                            <Link key={item.id} to="#">
                                                {item.name} - ${item.price.toLocaleString()}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
