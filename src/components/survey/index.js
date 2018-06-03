import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';


export default class Survey extends React.Component {

  state = this.props.prev

  change = (e) => {
    console.log(this.props)
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }
  render() {
    console.log(this.props)
    return (
      <form>
        <TextField
          name = "name"
          id="name"
          label="First name?"
          defaultValue=""
          value = {this.state.name}
          onChange={e => this.change(e)}
          className={this.props.textField}
          margin="normal"
        />
         <br />
         <br />
         <FormControl component="fieldset" required className={this.props.formControl}>
         <FormLabel component="legend">What would you like to learn?</FormLabel>
         <RadioGroup
           aria-label="interest"
           name="interest"
           className={this.props.group}
           value={this.state.interest}
           onChange={e => this.change(e)}
         >
           <FormControlLabel value="Software Engineering" control={<Radio />} label="Software Engineering" />
           <FormControlLabel value="IT, DevOps, Cybersecurity" control={<Radio />} label="IT/DevOps/Cybersecurity" />
           <FormControlLabel value="User Interface and Experience" control={<Radio />} label="User Interface/Experience" />
           <FormControlLabel value="Hardware Engineering" control={<Radio />} label="Hardware Engineering" />
           <FormControlLabel value="Sales and Marketing" control={<Radio />} label="Sales/Marketing" />
         </RadioGroup>
         </FormControl>
         <br />
         <br />
         <Button color="primary" variant="raised" className={this.props.button}  onClick={e => this.onSubmit(e)}>
        Complete Signup
      </Button>
      </form>
    )
  }
}
