import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Clear from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ShoppingCart extends React.Component {

  render() {
    const { classes, cartItems, currentTotal } = this.props;
    return (
      <Card>
        <CardHeader title="Shopping Cart"></CardHeader>
        <List dense className={classes.root}>
          {cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem alignItems="flex-start">
                <ListItemText inset primary={item.name} />
                <Divider />
                <ListItemText inset primary={item.quantity}>QTY -</ListItemText>
                <Divider />
                <ListItemText inset primary={`£${item.quantity * item.price}`} />
                <ListItemSecondaryAction>
                  <ListItemIcon>
                    <Clear onClick={this.props.removeCartItems.bind(this, item)} />
                  </ListItemIcon>
                </ListItemSecondaryAction>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Button onClick={this.props.clearAll.bind(this)} variant="contained" href="#contained-buttons" className={classes.button}>
          Clear All
                    </Button>
        <CardHeader title={`Total ${currentTotal}`}></CardHeader>
      </Card>
    );
  }
}

ShoppingCart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShoppingCart);