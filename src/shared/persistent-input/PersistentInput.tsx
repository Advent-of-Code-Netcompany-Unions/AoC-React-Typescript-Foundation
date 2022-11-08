import React from 'react';
export class PersistentInput extends React.Component<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & { path: string; initialValueRetrieved: (s: string) => void }
> {

  constructor(props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & { path: string; initialValueRetrieved: (s: string) => void }) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const item = localStorage.getItem(this.props.path)
    if (item) {
      this.props.initialValueRetrieved(item);
    }
  }

  render() {
    const {
      path,
      initialValueRetrieved,
      ...rest
    } = this.props;
    return <textarea {...rest} onChange={(ev) => {
      localStorage.setItem(this.props.path, ev.target.value);
      this.props.onChange?.(ev);
    }}></textarea>
  }
}
