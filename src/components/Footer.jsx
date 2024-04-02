import { AddNoteBtn } from './AddNoteBtn';
import { SearchBtn } from './SearchBtn';

const Footer = () => {
  return (
    <div
      className='footer d-flex mt-2'
      style={{ position: 'sticky', bottom: 0, justifyContent: 'space-between' }}
    >
      <SearchBtn />
      <AddNoteBtn />
    </div>
  );
};
export default Footer;
