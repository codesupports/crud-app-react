import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Header from './components/Header'
import Student from './components/Student'
import Add from './components/Add'
import Details from './components/Details'
import Edit from './components/Edit'
import Home from './components/Home'
import res from './db/data.json'
import Modal from './components/Modal';

function App() {
  const [data, setData] = useState(res);
  const [loading, setLoading] = useState(false);
  const [deleteData, setDeleteData] = useState([]);
  const [editData, setEditData] = useState();
  const [editItem, setEditItem] = useState(-1);
  const [getEditId, setGetEditId] = useState();
  const [deletedId, setDeletedId] = useState();

  const closeModal = () => {
    setLoading(false)
  }
  // useEffect(() => {
  //   fetch('./db/data.json')
  //     .then((respone) => {
  //       if (!respone.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       return respone.json()
  //     })
  //     .then((res) => {
  //       setData(res);
  //       setLoading(false);
  //     })
  // }, [])
  // console.log(data)
  const handleAdd = (val) => {
    // console.log(val)
    // res.push(val)
    setData([...data, val])
    // fetch('./db/data.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(val),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Data appended successfully:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error appending data:', error);
    //   });
  }

  const handleDelete = (val) => {
    setLoading(true)
    const dData = data.filter((item) => {
      return item.id !== val
    })
    setDeleteData(dData)
    setDeletedId(val)
    // setData(dData)
    // console.log(dData)
  }

  const handleDetails = (val) => {
    const dData = data.filter((item) => {
      return item.id == val
    })
    setDeleteData(dData)
  }

  const handleDeleteSelected = (val) => {
    const ft = data.filter((item) => {
      return item.id !== val
    })
    setData(ft)
    setLoading(false)
    // console.log('val', ft)
  }

  const handleEdit = (id, index) => {
    const editData = data.filter((item) => {
      return item.id == id
    })
    setEditData(editData)
    setEditItem(index)
    setGetEditId(id)
  }

  const handleUpdate = (val, editedData) => {
    data[val] = { id: getEditId, name: editedData.name, salary: editedData.salary, age: editedData.age }
    setData(data)
  }
  // console.log(data)
  useEffect(() => {

  }, [data])
  // console.log('data', data)
  return (
    <>
      <HashRouter >
        <Header />
        <main className='mx-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Student data={data} handleDelete={handleDelete} handleEdit={handleEdit} handleDetails={handleDetails} x />} />
            <Route path="/add" element={<Add handleAdd={handleAdd} />} />
            <Route path="/edit" element={<Edit editData={editData} handleUpdate={handleUpdate} isEditItem={editItem} />} />
            <Route path="/details" element={<Details deleteData={deleteData} handleDeleteSelected={handleDeleteSelected} />} />
          </Routes>
        </main>
        {loading && <Modal closeModal={closeModal} deleteData={deleteData} handleDeleteSelected={handleDeleteSelected} deletedId={deletedId} />}
      </HashRouter >
    </>
  )
}

export default App
