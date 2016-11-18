import React from 'react';

import RouteHelper from './libs/RouteHelper.js';

import B from './components/B.js';
import A from './components/A.js';
import AdminRegister from './components/admin/Register.js';

const Routes = {
    '/':                    B,
    '/page/:name':          A,
    '/product':             B,
    '/cart':                A,
    '/checkout':            B,
    '/receipt':             A,
    '/admin':               B,
    '/admin/login':         A,
    '/admin/logout':        B,
    '/admin/register':      [AdminRegister, 'adminRegister'],
    '/admin/products':      A,
    '/admin/product/:id':   B
};

export default RouteHelper.prepare(Routes);