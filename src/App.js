import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LinkList } from './components/LinkList';
import { AddLinkForm } from './components/AddLinkForm';
import { EditLinkForm } from './components/EditLinkForm';
import Alert from './components/Alert';

function App() {
  const [links, setLinks] = useState(JSON.parse(localStorage.getItem('links')) || []);
  const [alert,setAlert] = useState({show: false, msg: "" , type: ""});

  function addLink(id, name, url, tags) {
    const link = { id, name, url, tags };
    setLinks([...links, link]);
    localStorage.setItem('links', JSON.stringify([...links, link]));
    showAlert(true, "success", "Item have been added to localStorage");
  }

  function deleteLink(url) {
    setLinks(links.filter(link => link.url !== url));
    localStorage.setItem('links', JSON.stringify(links.filter(link => link.url !== url)));
    showAlert(true, "danger", "Item was deleted from localStorage");
  }

  function updateLink(updatedLink) {
    const updatedLinks = links.map(link => (link.id === updatedLink.id ? updatedLink : link));
    setLinks(updatedLinks);
    localStorage.setItem('links', JSON.stringify(updatedLinks));
    showAlert(true, "success", "Item have been updated");
  }

  function showAlert(show = false, type = "", msg = "") {
    setAlert({show, type, msg});
  }

  return (
    <Router>
      <section className="section-center">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={links} />}
        <Routes>
          <Route path="/" element={<LinkList links={links} deleteLink={deleteLink} />} />
          <Route path="/add" element={<AddLinkForm addLink={addLink} />} />
          <Route
            path="/edit/:id"
            element={<EditLinkForm links={links} updateLink={updateLink} />}
          />
        </Routes>
      </section>
    </Router>

  );
}

export default App;
