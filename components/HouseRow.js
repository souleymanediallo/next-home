const HouseRow = ({house}) => {
    return (
        <tr>
                <th scope='row'>{house.id}</th>
                <td>{house.address}</td>
                <td>{house.country}</td>
                <td>{house.price}</td>
              </tr>
    )
}

export default HouseRow