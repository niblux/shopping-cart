import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class ItemTable extends Component {

    render() {

        const { classes, products } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Fat (g)</TableCell>
                            <TableCell align="right">Carbs (g)</TableCell>
                            <TableCell align="right">Protein (g)</TableCell>
                            <TableCell align="right">Add to Cart</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(item => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="item">
                                    {item.name}
                                </TableCell>
                                <TableCell align="right">£{item.price}</TableCell>
                                <TableCell align="right">{item.fat}</TableCell>
                                <TableCell align="right">{item.carbs}</TableCell>
                                <TableCell align="right">{item.protein}</TableCell>
                                <TableCell align="right">
                                    <Fab color="primary" aria-label="Add" className={classes.fab}>
                                        <Icon onClick={this.props.addCartItems.bind(this, item)} className={classes.icon}>
                                            add_circle
                                        </Icon>
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

ItemTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemTable);