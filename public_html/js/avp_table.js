/*
 * 	Filename:   avp_table.js
 * 	Date:       2016-01-20
 * 	Author:     Lars Veldscholte
 * 	            lars@veldscholte.eu
 * 	            http://lars.veldscholte.eu
 *
 * 	Copyright 2016 Lars Veldscholte
 *
 * 	This file is part of RadiusAdmin.
 *
 * 	RadiusAdmin is free software: you can redistribute it and/or modify
 * 	it under the terms of the GNU General Public License as published by
 * 	the Free Software Foundation, either version 3 of the License, or
 * 	(at your option) any later version.
 *
 * 	RadiusAdmin is distributed in the hope that it will be useful,
 * 	but WITHOUT ANY WARRANTY; without even the implied warranty of
 * 	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * 	GNU General Public License for more details.
 *
 * 	You should have received a copy of the GNU General Public License
 * 	along with RadiusAdmin. If not, see <http://www.gnu.org/licenses/>.
 */

$(document).ready(function() {
    var check_password_field = function() {
        var el = $(this).closest('tr').find('input[name="checkattrs-value[]"]');
        if ($(this).val() == 'Cleartext-Password') {
            el.attr('type', 'password');
            if (el.data('Cleartext-Password'))
                el.val(el.data('Cleartext-Password'));
        } else {
            el.data('Cleartext-Password', el.val());
            el.val('').attr('type', 'text');
        }
    };

	$('#checkattrs-table').on("click", '#delete-row', function() {
		$(this).closest('tr').remove();
	});

	$('#replyattrs-table').on("click", '#delete-row', function() {
		$(this).closest('tr').remove();
	});

	$('#add-row-checkattrs').click(function() {
        var el = $('<tr><td><input name="checkattrs-id[]" type="hidden" value=""><input name="checkattrs-attribute[]" list="available-attributes" type="text" class="form-control"></td><td><select name="checkattrs-operator[]" class="form-control">' + operatoroptions + '</select></td><td><input name="checkattrs-value[]" type="text" class="form-control"></td><td><button type="button" class="btn btn-default" id="delete-row"><span class="glyphicon glyphicon-remove"></span></button></td></tr>');
        el.find('input[name="checkattrs-attribute[]"]').change(check_password_field);
		$('#checkattrs-table').append(el);
	});

	$('#add-row-replyattrs').click(function() {
        var el = $('<tr><td><input name="replyattrs-id[]" type="hidden" value=""><input name="replyattrs-attribute[]" list="available-attributes" type="text" class="form-control"></td><td><select name="replyattrs-operator[]" class="form-control">' + operatoroptions + '</select></td><td><input name="replyattrs-value[]" type="text" class="form-control"></td><td><button type="button" class="btn btn-default" id="delete-row"><span class="glyphicon glyphicon-remove"></span></button></td></tr>');
		el.find('input[name="replyattrs-attribute[]"]').change(check_password_field);
		$('#replyattrs-table').append(el);
	});

    $('input[name="checkattrs-attribute[]"]').change(check_password_field);
});