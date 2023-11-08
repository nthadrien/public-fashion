
import css from './listTable.module.css';
import Pagination from './pagination';


const Table = (props) => {


    return (
        <section class={css.tables}>

                <table class={css.table1} >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>head 1</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                yeash
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                yeash
                            </td>
                        </tr>

                    </tbody>
                </table>

            
                <table class={css.table2}>
                    <thead>
                        <tr>
                            <th>head2</th>
                            <th>head3</th>
                            <th>head4</th>
                            <th>head5</th>
                            <th>head6</th>
                            <th>head7</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td>Cell 5</td>
                            <td>Cell 6</td>
                            <td>Cell 7</td>
                        </tr>
                        <tr>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td>Cell 5</td>
                            <td>Cell 6</td>
                            <td>Cell 7</td>
                        </tr>

                    </tbody>
                </table>
        </section>
    )
}


const ListTable = (props) => {

    console.log(props.list);
    return (
        <>
            <Table />
            <Pagination />
        </>
    )
};;

export default ListTable;