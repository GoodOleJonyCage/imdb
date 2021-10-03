import { Banner } from './Banner'
import { Results } from './Results'
import { ResultsSidebar } from './ResultsSidebar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Body.css'

export const Body = () => {
    return (
        <div className="body">
            <Banner />
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <div className="search-result-body">
                            <Results />
                            <ResultsSidebar />
                        </div>
                    </Route>
                    <Route path="/titledetails">
                        <div>1</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
