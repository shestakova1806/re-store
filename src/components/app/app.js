import React, { Component } from 'react';

import BookstoreService from '../../services/bookstore-service';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import { BookstoreServiceProvider, BookstoreServiceProvider } from '../bookstote-service-context';

import './app.css';

export default class App extends Component {

    state = {
        hasError: false,
        bookstoreService: new BookstoreService()
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (

            <ErrorBoundry>
                <BookstoreServiceProvider value={this.state.bookstoreService}>
                </BookstoreServiceProvider>
            </ErrorBoundry>
        );
    }
};