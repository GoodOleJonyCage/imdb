import './ResultsSidebar.css'

export const ResultsSidebar = () => {

    return (
        <div className="resultsSidebar article">
            <div id="top_rhs_wrapper" className="cornerstone_slot">
                <iframe
                    title="Advertisement"
                    allowTransparency="true"
                    className="yesScript "
                    data-first-party-creative-template
                    frameBorder={0}
                    id="top_rhs"
                    marginWidth={0}
                    marginHeight={0}
                    name="top_rhs"
                    onload="doWithAds.call(this, function(){ if(ad_utils && ad_utils.on_ad_load) { ad_utils.on_ad_load(this); }}); "
                    scrolling="no"
                    data-original-width={300}
                    data-original-height={250}
                    width={0}
                    height={0}
                />{" "}
            </div>
            <div id="top_rhs_reflow_helper" />

            <div className="aux-content-widget-3">
                <h3>Category Search</h3>
                <p>Search for "kong" within a specific category:</p>
                <ul className="findFilterList">
                    <li>
                        <a href="/find?q=kong&s=all&ref_=fn_al">All</a>
                    </li>
                    <li>
                        <a href="/find?q=kong&s=nm&ref_=fn_nm">Name</a>{" "}
                        <span>(actor, writer, director, etc)</span>
                    </li>
                    <li className="filterActive">
                        Title <span>(movie, TV, video game)</span>
                    </li>
                    <ul className="findTitleSubfilterList">
                        <li>
                            <a href="/find?q=kong&s=tt&ttype=ft&ref_=fn_ft">Movie</a>
                        </li>
                        <li>
                            <a href="/find?q=kong&s=tt&ttype=tv&ref_=fn_tv">TV</a>
                        </li>
                        <li>
                            <a href="/find?q=kong&s=tt&ttype=ep&ref_=fn_ep">TV Episode</a>
                        </li>
                        <li>
                            <a href="/find?q=kong&s=tt&ttype=vg&ref_=fn_vg">Video Game</a>
                        </li>
                    </ul>
                    <li>
                        <a href="/find?q=kong&s=co&ref_=fn_co">Company</a>
                    </li>
                    <li>
                        <a href="/find?q=kong&s=kw&ref_=fn_kw">Keyword</a>
                    </li>
                    <li>
                        <a href="/search/title-text?plot=kong&ref_=fn_pl">Plot Summaries</a>
                    </li>
                    <li>
                        <a href="/search/name-text?bio=kong&ref_=fn_bi">Biographies</a>
                    </li>
                    <li>
                        <a href="/search/title-text?quotes=kong&ref_=fn_qu">Quotes</a>
                    </li>
                </ul>
            </div>

            <div
                id="rhs_cornerstone_wrapper"
                className="cornerstone_slot"
                style={{ display: "none" }}
            >
                <iframe
                    title="Advertisement"
                    allowTransparency="true"
                    className="yesScript "
                    data-blank-serverside
                    frameBorder={0}
                    id="rhs_cornerstone"
                    marginWidth={0}
                    marginHeight={0}
                    name="rhs_cornerstone"
                    onload="doWithAds.call(this, function(){ if(ad_utils && ad_utils.on_ad_load) { ad_utils.on_ad_load(this); }}); "
                    scrolling="no"
                    data-original-width={0}
                    data-original-height={0}
                    width={0}
                    height={0}
                    style={{ display: "none" }}
                />{" "}
            </div>
            <div id="rhs_cornerstone_reflow_helper" />
            {/* End RHS_CORNERSTONE */}
            <div className="aux-content-widget-3">
                <h3>Advanced Search</h3>
                <p>
                    Create an extremely specific search with a variety of options and filters.
                </p>
                <ul className="findSearchOptionsList">
                    <li className="filterActive">Search</li>
                    <li>
                        <a href="/search/title?ref_=fn_asr_tt">Advanced Title Search</a>
                    </li>
                    <li>
                        <a href="/search/name?ref_=fn_asr_nm">Advanced Name Search</a>
                    </li>
                    <li>
                        <a href="/search/common?ref_=fn_asr_co">Collaborations</a>
                    </li>
                    <li>
                        <a href="/search?ref_=fn_asr_to">Topics</a>
                    </li>
                    <br />
                    <li className="filterActive">Browse</li>
                    <li>
                        <a href="/feature/genre?ref_=fn_asr_ge">Genre</a>
                    </li>
                    <li>
                        <a href="/search/keyword?ref_=fn_asr_kw">Keyword</a>
                    </li>
                </ul>
                <hr />
                <div className="findEnableAdultToggle">
                    <a href="/register/login?ref_=fn_ad">Log in</a> to enable adult
                    titles/names in your searches.
                </div>
            </div>
        </div>
    );
}