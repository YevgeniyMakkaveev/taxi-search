import React, { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "bootstrap/dist/css/bootstrap.min.css";
import './maker.css'
const TableMaker = (props) => {
  const [selectModel, setSelect] = useState(null)

  const tableEvents = {
    onClick: (e, column, columnIndex, row, rowIndex) => {
      let test = getTarif(row, columnIndex)
      if (test > 1) { setSelect(`${row.markModel} ${test} `) }
    }
  }

  const getTarif = (row, colN) => {
    switch (colN) {
      case 1: return row.comfy
      case 2: return row.comfyPlus
      case 3: return row.biz
      case 4: return row.eco
      case 5: return row.mini
      case 6: return row.stand
      case 7: return row.light
      default: return null
    }
  }

  const columns = [{
    dataField: 'markModel',
    text: 'Марка и модель',
    sort: true,
  }, {
    dataField: 'comfy',
    text: 'Комфорт',
    sort: true,
    events: tableEvents,
    style: {
      cursor: `pointer`
    }
  }, {
    dataField: 'comfyPlus',
    text: 'Комфорт+',
    sort: true,
    events: tableEvents,
    style: {
      cursor: `pointer`
    }
  }, {
    dataField: 'biz',
    text: 'Бизнес',
    sort: true,
    events: tableEvents,
    style: {
      cursor: `pointer`
    }
  }, {
    dataField: 'eco',
    text: 'Эконом',
    sort: true,
    events: tableEvents,
    style: {
      cursor: `pointer`
    }
  }, {
    dataField: 'mini',
    text: 'Минивен',
    sort: true,
    events: tableEvents,
    style: {
      cursor: `pointer`
    }
  }, {
    dataField: 'stand',
    text: 'Стандарт',
    sort: true,
    events: tableEvents,
    style: {
      cursor: `pointer`
    }
  }, {
    dataField: 'light',
    text: 'Лайт',
    sort: true,
    events: tableEvents,
    style: {
      cursor: `pointer`
    }
  }];


  const pageButtonRenderer = ({
    page,
    active,
    disable,
    title,
    onPageChange
  }) => {
    const handleClick = (e) => {
      e.preventDefault();
      onPageChange(page);
    };

    const activeStyle = {};
    if (active) {
      activeStyle.backgroundColor = 'gray';
      activeStyle.color = 'black';
    } else {
      activeStyle.backgroundColor = '#E4E5E6';
      activeStyle.color = 'black';
    }
    if (typeof page === 'string') {
      activeStyle.backgroundColor = 'white';
      activeStyle.color = 'black';
    }
    return (
      <li className="page-item">
        <a href="#" className="fatty" onClick={handleClick} style={activeStyle}>{page}</a>
      </li>
    );
  };

  const options = {
    sizePerPage: 10,
    alwaysShowAllBtns: true,
    sizePerPageList: [{
      text: '5',
      value: 5
    }, {
      text: '10',
      value: 10
    }, {
      text: '15',
      value: 15
    }],
    pageButtonRenderer
  };

  const MySearch = (props) => {
    let input;
    const handleClick = () => {
      props.onSearch(input.value);
    };
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={handleClick} ref={n => input = n} placeholder="Поиск машины" aria-label="Car search" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={handleClick} id="button-addon2">Поиск</button>
        </div>
      </div>)
  }

  const items = props.data
  const selectdCar = selectModel ? `Выбран автомобиль: ${selectModel}` : 'Выберите автомобиль'
  return (
    <div>
      <ToolkitProvider
        keyField="markModel"
        bootstrap4
        data={items}
        columns={columns}
        pagination={paginationFactory()}
        search
      >
        {
          props => (
            <div>
              <MySearch {...props.searchProps} />
              <hr />
              <BootstrapTable

                pagination={paginationFactory(options)}
                {...props.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>
      <div className="select-car">
        <p> {selectdCar}</p>
      </div>
    </div>
  )
}
export default TableMaker