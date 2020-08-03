import React from 'react';

class NamaBuah extends React.Component {
  render() {
    return <h1>{this.props.nama}</h1>;
  }
}

class Harga extends React.Component {
  render() {
    return <h1>{this.props.harga}</h1>;
  }
}

class Berat extends React.Component {
  render() {
    return <h1>{this.props.berat}</h1>;
  }
}

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: "1 kg"},
  {nama: "Anggur", harga: 40000, berat: "0.5 kg"},
  {nama: "Strawberry", harga: 30000, berat: "0.4 kg"},
  {nama: "Jeruk", harga: 30000, berat: "1 kg"},
  {nama: "Mangga", harga: 30000, berat: "0.5 kg"}
]

class TabelBuah extends React.Component {
  render() {
    return (
      <>
        <div className="judul">
          <h1 className="judulbuah">Tabel Harga Buah</h1>
          <table className="tabelbuah">
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
            {dataHargaBuah.map(el=> {
              return (
                <tr>
                  <td><NamaBuah nama={el.nama}/></td> 
                  <td><Harga harga={el.harga}/></td>
                  <td><Berat berat={el.berat}/></td>
                </tr> 
              )
              })}
          </table>
        </div>
          
      </>
    )
  }
}

export default TabelBuah