import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { LoadSearchAll } from './Service'

import './Results.css'


export const Results = () => {

    const [vm, setvm] = useState({
        searchType: '',
        expression: '',
        errorMessage: '',
        results: []
    });

    useEffect(() => {
        LoadSearchAll(setvm);
    }, []);

    return (
        <div className="title-results">
            <div className="article">
                <h1 className="findHeader">
                    Displaying 200 results for <span className="findSearchTerm">"kong"</span>
                </h1>
                <div id="findSubHeader">
                    <span id="findSubHeaderLabel">Search category: </span>
                    All Titles
                </div>
                <div className="findSection">
                    <div className="findToggleExact">
                        View:
                        <a href="/find?q=kong&s=tt&exact=true&ref_=fn_tt_ex">
                            Exact title matches
                        </a>
                    </div>
                    <h3 className="findSectionHeader">
                        Titles
                    </h3>
                    <table className="title-search-result-list">
                        <tbody>
                            {
                                vm.results.map((i,index) => {
                                    return (
                                        <tr className={"findResult " + (index % 2 === 0 ? "even" : "odd")}>
                                                <td className="primary_photo">
                                                    <a href="/titledetails">
                                                        <img  src={i.image}   />
                                                    </a>
                                                </td>
                                                <td className="result_text">
                                                <NavLink to="/titledetails">{i.title}</NavLink>
                                                {i.description}
                                                </td>
                                            </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}



