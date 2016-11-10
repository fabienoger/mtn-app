import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import MainLayout from '/imports/ui/MainLayout';
import HomePage from '/imports/ui/pages/HomePage';


FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(MainLayout, {
      main: <HomePage />,
    });
  },
});
