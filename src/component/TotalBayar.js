import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';
import { API_URL } from '../utils/constants'

export default class TotalBayar extends Component {

    submitTotalBayar = (totalBayar) => {
        const pesanan = {
            total_bayar: totalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL + "pesanans", pesanan).then((res) => {
            this.props.history.push('sukses');
        });
    };

    render() {

        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);

        return (
            <div className="fixed-bottom">
                <Row>
                    <Col lg={{ span: 3, offset: 9 }}>
                        <h6>
                            Total Harga : {" "}
                            <strong className="float-right mr-2">
                                Rp. {numberWithCommas(totalBayar)}
                            </strong>
                        </h6>
                        <Button
                            variant="primary"
                            block="true"
                            className="mb-2 mt-2 mr-2"
                            size="lg"
                            onClick={() => this.submitTotalBayar(totalBayar)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
