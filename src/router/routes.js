import MainLayout from "../layouts/MainLayout";
import Cloud from "../pages/cloud/Cloud";
import Experiments from "../pages/experiments/Experiments";
import Overview from "../pages/overview/Overview";
import Sketch from "../pages/sketch/Sketch";
import Security from "../pages/security/Security";
import Ownership from "../pages/ownership/Ownership";
import Test from "../pages/test/Test";
import Colors from "../pages/colors/Colors";

const routes = [
    {
      path: "/",
      name: 'Overview',
      icon: 'icon-overview',
      exact: true,
      layout: ({children}) => (<MainLayout>{children}</MainLayout>),
      main: () => (<Overview></Overview>)
    },
    {
      path: "/cloud",
      name: 'Cloud',
      icon: 'icon-cloud',
      exact: true,
      layout: ({children}) => (<MainLayout>{children}</MainLayout>),
      main: () => (<Cloud></Cloud>)
    },
    {
      path: "/sketch",
      name: 'Sketch',
      icon: 'icon-sketch',
      exact: true,
      layout: ({children}) => (<MainLayout>{children}</MainLayout>),
      main: () => (<Sketch></Sketch>)
    },
    {
      path: "/experiments",
      name: 'Experiments',
      icon: 'icon-experiments',
      exact: true,
      layout: ({children}) => (<MainLayout>{children}</MainLayout>),
      main: () => (<Experiments></Experiments>)
    },
    {
      path: "/security",
      name: 'Security',
      icon: 'icon-security',
      exact: true,
      layout: ({children}) => (<MainLayout>{children}</MainLayout>),
      main: () => (<Security></Security>)
    },
    {
      path: "/ownership",
      name: 'Ownership',
      icon: 'icon-ownership',
      exact: true,
      layout: ({children}) => (<MainLayout>{children}</MainLayout>),
      main: () => (<Ownership></Ownership>)
    },
    {
      path: "/test",
      name: 'A/B Test',
      icon: 'icon-test',
      exact: true,
      layout: ({children}) => (<MainLayout>{children}</MainLayout>),
      main: () => (<Test></Test>)
    },
    {
      path: "/colors",
      name: 'Colors',
      icon: 'icon-colors',
      exact: true,
      layout: ({children}) => (<MainLayout>{children}</MainLayout>),
      main: () => (<Colors></Colors>)
    }
  ];

  export default routes;