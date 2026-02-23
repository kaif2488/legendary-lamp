import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import propertySearchData from "../data/propertySearchData";
import BudgetFilter, { budgetFilters } from "./BudgetFilter";

const Banner = () => {
    const [word, setWord] = useState("");
    const [submittedWord, setSubmittedWord] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("all");
    const [hasSearched, setHasSearched] = useState(false);

    const find = useMemo(() => {
        const normalizedWord = submittedWord.trim().toLowerCase();
        const selectedBudgetOption = budgetFilters.find((range) => range.value === selectedBudget);

        if (normalizedWord.length === 0) {
            return [];
        }

        return propertySearchData.filter((item) => {
            const matchesWord = item.name.toLowerCase().includes(normalizedWord);
            const matchesBudget = !selectedBudgetOption || selectedBudgetOption.max === null
                ? true
                : item.price >= selectedBudgetOption.min && item.price <= selectedBudgetOption.max;

            return matchesWord && matchesBudget;
        });
    }, [submittedWord, selectedBudget]);

    const hasNoResults = hasSearched && submittedWord.trim().length > 0 && find.length === 0;

    const onSearch = (e) => {
        e.preventDefault();
        setSubmittedWord(word);
        setHasSearched(true);
    };

    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(/img/banner.jpg)` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <h2 className="mt-2 mb-4 banner-title"><strong> BULLZY REALITY</strong> </h2>
                                <p> CONFIDENCE IN EVERY SQUARE FOOT</p>
                                <form className="search-area" onSubmit={onSearch}>
                                    <input
                                        value={word}
                                        onChange={(e) => setWord(e.target.value)}
                                        type="text"
                                        className="inp-search"
                                        placeholder="Search"
                                    />
                                    <button type="submit" className="btn-search m-2">Search All</button>
                                </form>
                                <BudgetFilter
                                    value={selectedBudget}
                                    onChange={(e) => setSelectedBudget(e.target.value)}
                                />
                                {hasSearched && submittedWord.trim().length > 0 && (
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
